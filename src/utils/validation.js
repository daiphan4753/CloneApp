import React from 'react';

const CheckEmail = (email) =>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}
const CheckPass = (pass) =>{
}
export {CheckEmail};