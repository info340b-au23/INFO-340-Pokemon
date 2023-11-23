import React from 'react';
import BerriesSection from './BerriesSection';
import SleepTypesSection from './SleepTypesSection';

export function Form(props) {
  return (
    <div className="form-container">
      <header>
        <h1>Add to Pokemon Collection</h1>
      </header>
      <main>
        <section className="button-container">
          <a href="collection.html" className="button-nav">Return to Collection</a>
        </section>

        <form className="add-collection-form">
          <BerriesSection berries={props.berries} />
          <SleepTypesSection />

          {/* Other sections/components can be added here if needed */}

          <div className="form-card">
            <img src="img/Eevee.jpg" alt="Eevee" />
            <p>Eevee</p>
            <button className="add-button">Add</button>
          </div>

          <div className="form-submit-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
      <footer>
        <p>This web application was created by us using our own two hands.</p>
        <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
        <p>&copy; 2023 INFO 340 Team B6.</p>
      </footer>
    </div>
  );
}

export default Form;