export default function useValidator() {
    return {
        email: function(data) {
            return [!!String(data).toLowerCase().match(/^\S+@\S+\.\S+$/
            )]
        },
        password: function(data) {
            let errors=[];
            if(data.length<8) {
                errors.push("Your password must be at least 8 characters");
            }
            if(data.search(/[a-z]/i)<0) {
                errors.push("Your password must contain at least one letter.");
            }
            if(data.search(/[0-9]/)<0) {
                errors.push("Your password must contain at least one digit.");
            }
            if(errors.length>0) {
                alert(errors.join("\n"));
                return false;
            }
            return [true,errors];
        },
        firstName: function(data) {
            return [!!String(data).match(/^[a-zA-Z]+$/)]
        }
    }
}