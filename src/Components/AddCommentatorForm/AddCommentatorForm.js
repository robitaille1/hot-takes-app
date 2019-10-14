import React from 'react'
import Nav from '../Nav/Nav'
import './AddCommentatorForm.css'


function AddCommentatorForm() {
    return (
      <main className='AddCommentatorForm'>
          <Nav />
          <section class="container">
            <form>
                <fieldset>
                    <div class="form-section">
                        <label for="date">Name:</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div class="form-section">
                        <label for="commentator">Network:</label>
                        <select name="Network" id="Network">
                            <option value="ESPN">ESPN</option>
                            <option value="Barstool">Barstool Sports</option>
                            <option value="Ringer">The Ringer</option>
                            <option value="Fox">Fox</option>
                            <option value="NBC">NBC</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <label for="twitter">Twitter:</label>
                        <input type="text" />
                    </div>
                    <div class="form-section">
                        <label for="instagram">Instagram:</label>
                        <input type="text" />
                    </div>
                    <div class="form-section">
                        <label for="fb">Facebook:</label>
                        <input type="text" />
                    </div>
                    <button class="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
      </main>
    );
  }
  
export default AddCommentatorForm;