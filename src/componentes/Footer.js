import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <section>
          <h1 className='centrarlo'>
            CONTÁCTAME
          </h1>
          <div className='form-container'>
            <form>
              <div className='form-group'>
                <input type='text' id='name' name='name' placeholder='Tu nombre' className='input-field' />
              </div>
              <div className='form-group'>
                <input type='email' id='email' name='email' placeholder='Tu correo electrónico' className='input-field' />
              </div>
              <div className='form-group'>
                <textarea id='message' name='message'  className='textarea-field'></textarea>
              </div>
            </form>
          </div>
        </section>
      </div>
    </footer>
  );
};
