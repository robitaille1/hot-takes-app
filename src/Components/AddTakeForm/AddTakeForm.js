import React from 'react'
import Nav from '../Nav/Nav'
import './AddTakeForm.css'


function AddTakeForm() {
    return (
      <main className='AddTakeForm'>
          <Nav />
          <section className="container">
            <form>
                <fieldset>
                    <div className="form-section">
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="commentator">Select a Commentator:</label>
                        <select name="commentator" id="commentator">
                            <option value="Bill">Bill Simmons</option>
                            <option value="Dave">Dave Portnoy</option>
                            <option value="Stephen">Stephen A. Smith</option>
                        </select>
                    </div>
                    <div className="form-section">
                        <label className="take-label"htmlFor="take">Take Information:</label>
                        <textarea name="take" id="take" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-section">
                        <label htmlFor="sport">Sport:</label>
                        <select name="sport" id="Sport">
                            <option value="NBA">NBA</option>
                            <option value="NFL">NFL</option>
                            <option value="MLB">MLB</option>
                            <option value="NHL">NHL</option>
                        </select>
                    </div>
                    <div className="form-section">
                        <label htmlFor="correct">Correct or Incorrect?</label>
                        <select name="correct" id="correct">
                            <option value="true">True</option>
                            <option value="false">False</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <button className="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
      </main>
    );
  }
  
  export default AddTakeForm;