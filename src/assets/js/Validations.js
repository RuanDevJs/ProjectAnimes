export function validateName(stringName){
    const name = String(stringName).trim();

    if(name.length > 15){
        return `O nome selecionado: ${name}, é muito longo!`;
    }

    if(name.length < 4){
        return {
            error: `O nome selecionado: ${name}, é muito curto!`
        }
    }else{
        return name;
    }


}

export function validateEmail(stringEmail){
    const email = String(stringEmail).trim();

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validateEmail)){
        return stringEmail;
    }else{
        return {
            error: `Por favor adicione um email válido`
        };
    }
}

export function validatePassword(stringPassword){
    const password = String(stringPassword).trim();
    const lowerPassword = password.toLowerCase();

    if(password.length < 13){
        return {
            error: "Senha muito curta!"
        }
    }

    if(password[0] === lowerPassword[0]){
        return {
            error: "Primeira letra da senha deve ser maiuscúla"
        }
    }

    return password;
}
