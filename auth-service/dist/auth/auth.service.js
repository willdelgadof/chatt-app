"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let AuthService = class AuthService {
    supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    async signUp(email, password) {
        const { data, error } = await this.supabase.auth.signUp({ email, password });
        if (error)
            throw new Error(error.message);
        return data;
    }
    async signIn(email, password) {
        const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
        if (error)
            throw new Error(error.message);
        return data;
    }
    verifyToken(token) {
        const base64 = token.split('.')[1];
        const decoded = JSON.parse(Buffer.from(base64, 'base64').toString());
        return decoded;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map