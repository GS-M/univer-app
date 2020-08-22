import React from 'react';

export const UniversAPI = {
    getUnivers: () => {
        return fetch("https://grnl.herokuapp.com/university")
    }
}