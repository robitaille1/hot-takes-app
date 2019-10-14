import React from 'react'
import Nav from '../Nav/Nav'
import './AddTakeForm.css'


function AddTakeForm() {
    return (
      <main className='AddTakeForm'>
          <Nav />
          <section class="container">
            <form>
                <fieldset>
                    <div class="form-section">
                        <label for="date">Date:</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div class="form-section">
                        <label for="commentator">Select a Commentator:</label>
                        <select name="commentator" id="commentator">
                            <option value="Bill">Bill Simmons</option>
                            <option value="Dave">Dave Portnoy</option>
                            <option value="Mina">Mina Kimes</option>
                            <option value="Stephen">Stephen A. Smith</option>
                            <option value="Zach">Zach Dave</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <label class="take-label"for="take">Take Information:</label>
                        <textarea name="take" id="take" cols="30" rows="10"></textarea>
                    </div>
                    <div class="form-section">
                        <label for="correct">Correct or Incorrect?</label>
                        <select name="correct" id="correct">
                            <option value="true">True</option>
                            <option value="false">False</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <button class="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
      </main>
    );
  }
  
  export default AddTakeForm;