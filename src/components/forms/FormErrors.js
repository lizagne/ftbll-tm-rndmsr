import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='form-errors'>
    { Object.keys(formErrors).map((fieldName, idx) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={ idx }>{ fieldName } { formErrors[fieldName] }</p>
        )        
      } else {
        return '';
      }
    })}
  </div>