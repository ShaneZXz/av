const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


$('#sendForm').click(function(){


    let jForm = {
        email:emailCheck(),
        phone:phoneCheck(),
        name:nameCheck(),
        comment:commentCheck()
    }

    let formSettings = {
        email: false,
        phone: false,
        name: false,
        comment: true
    }
    let formIds = {
        email:`#fInputEmail`,
        phone:`#fInputPhone`,
        name:`#fInputName`,
        comment:`#fInputComment`
    }
    let formValidate = [];
    let boolCheck = (arr) => arr.every(v => v === true);
    for(let x in jForm){
        if(jForm[x] === formSettings[x]){
            console.log(`SUPPOSED TO BE FALSE__ `+x+'; '+jForm[x]);
            formValidate.push(false);
            $(formIds[x]).addClass(`is-invalid`);
            $(formIds[x]).removeClass(`is-valid`);
        }
        else{
            console.log(`SUPPOSED TO BE TRUE__ `+x+'; '+jForm[x]);
            formValidate.push(true);
            $(formIds[x]).removeClass(`is-invalid`);
            $(formIds[x]).addClass(`is-valid`);
        }
    }
    let validForm = boolCheck(formValidate);
    if(!validForm){
        Toast.fire({
            icon: 'error',
            title: 'Something wrong in the form!'
        })
    }
    else{
        Toast.fire({
            icon: 'success',
            title: 'Your form has been sent!'
        })
    }

    //console.log(`email: `+jForm.email, `phone: `+jForm.phone, `name: `+jForm.name,`comment: `+jForm.comment);
    
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
    if(fInputPhone.value.length < 9){
        return false;
    }
    else {
        if(!fInputPhone.checkValidity()){
            return false;
         }
         else{
             return fInputPhone.value;
         }
    }

}

const commentCheck = () => {
    let cleanComment = fInputComment.value.replace(/[|="'`~*&;:$%@"<>()+,]/g, "");
    return cleanComment;
}

