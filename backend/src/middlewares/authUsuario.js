"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRecuperacaoSenha = exports.protegeRotaPaciente = exports.protegeRotaFisioterapeuta = exports.authUsuario = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function authUsuario(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub, tipo_usuario } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_USUARIO);
        req.usuario_id = sub;
        req.tipo_usuario = tipo_usuario;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.authUsuario = authUsuario;
function protegeRotaFisioterapeuta(req, res, next) {
    if (req.tipo_usuario !== "Fisioterapeuta") {
        return res.status(403).json({ mensagem: "Usuário não autorizado" });
    }
    next();
}
exports.protegeRotaFisioterapeuta = protegeRotaFisioterapeuta;
function protegeRotaPaciente(req, res, next) {
    if (req.tipo_usuario !== "Paciente") {
        return res.status(403).json({ mensagem: "Usuário não autorizado" });
    }
    next();
}
exports.protegeRotaPaciente = protegeRotaPaciente;
function authRecuperacaoSenha(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_RECUPERACAO_SENHA);
        req.usuario_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.authRecuperacaoSenha = authRecuperacaoSenha;
