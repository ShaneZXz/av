$('#sendForm').click(function(){
    let jForm = {
        email:emailCheck(),
        phone:phoneCheck(),
        name:nameCheck(),
        comment:commentCheck()
    }
    console.log(`email: `+jForm.email, `phone: `+jForm.phone, `name: `+jForm.name,`comment: `+jForm.comment);
    
});

const emailCheck = () => {
    
    if(fInputEmail.value.length < 1){
        return false;
    }
    else{
        if(!fInputEmail.checkValidity()){
            return false;
        }
        else{
            return fInputEmail.value;
        }
    }
}

const nameCheck = () => {
    
    if(fInputName.value.length < 2){
        return false;
    }
    else{
        let cleanName = fInputName.value.replace(/[|&;$%@"<>()+,]/g, "");
        return cleanName;
    }
}

const phoneCheck = () => {
    
    if(!fInputPhone.checkValidity()){
        return false;
    }
    else{
        return fInputPhone.value;
    }
}

const commentCheck = () => {
    let cleanComment = fInputComment.value.replace(/[|="'`~*&;:$%@"<>()+,]/g, "");
    return cleanComment;
}