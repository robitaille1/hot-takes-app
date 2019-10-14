import React from 'react'
import Nav from '../Nav/Nav'
import './AddCommentatorForm.css'


function AddCommentatorForm() {
    return (
      <main className='AddCommentatorForm'>
          <Nav />
          <section className="container">
            <form>
                <fieldset>
                    <div className="form-section">
                        <label for="date">Name:</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="form-section">
                        <label for="commentator">Network:</label>
                        <select name="Network" id="Network">
                            <option value="ESPN">ESPN</option>
                            <option value="Barstool">Barstool Sports</option>
                            <option value="Ringer">The Ringer</option>
                            <option value="Fox">Fox</option>
                            <option value="NBC">NBC</option>
                        </select>
                    </div>
                    <div className="form-section">
                        <label for="twitter">Twitter:</label>
                        <input type="text" />
                    </div>
                    <div className="form-section">
                        <label for="instagram">Instagram:</label>
                        <input type="text" />
                    </div>
                    <div className="form-section">
                        <label className="about-label"for="about">About:</label>
                        <textarea name="about" id="about" cols="30" rows="10"></textarea>
                    </div>
                    <button className="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
      </main>
    );
  }
  
export default AddCommentatorForm;