"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const buscarIdPorEmail_1 = __importDefault(require("./buscarIdPorEmail"));
const smtp_1 = require("./smtp");
function enviarEmailRecuperacaoSenha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const usuarioId = yield (0, buscarIdPorEmail_1.default)(email);
        if (!usuarioId) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        const token = jsonwebtoken_1.default.sign({ usuarioId: usuarioId.toString() }, process.env.JWT_RECUPERACAO_SENHA, { expiresIn: '3h' });
        const transporter = nodemailer_1.default.createTransport({
            host: smtp_1.SMTP_CONFIG.host,
            port: smtp_1.SMTP_CONFIG.port,
            secure: false,
            auth: {
                user: smtp_1.SMTP_CONFIG.user,
                pass: smtp_1.SMTP_CONFIG.pass,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const resetPasswordLink = `http://localhost:3000/nova-senha?token=${token}`;
        const mailOptions = {
            from: "email.micday@gmail.com",
            to: email,
            subject: "Recuperação de Senha - mic.day",
            text: `Olá! Aqui está o seu link de recuperação de senha: ${resetPasswordLink}`,
        };
        try {
            yield transporter.sendMail(mailOptions);
            res
                .status(200)
                .json({ message: "Email de recuperação de senha enviado com sucesso!" });
        }
        catch (error) {
            console.error("Erro ao enviar o email:", error);
            res
                .status(500)
                .json({
                error: "Ocorreu um erro ao enviar o email de recuperação de senha.",
            });
        }
    });
}
exports.default = enviarEmailRecuperacaoSenha;
