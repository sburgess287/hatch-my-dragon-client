import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

import './app.css'

export function Navbar() {
  return (
    <div>
      <nav class="nav-bar">
          <button class="nav-button">Create Goal</button>
          <button class="nav-button">Goals Manager</button>
          <button class="nav-button">Logout</button>
        </nav>
    </div>
  )
}

export function Header() {
  return (
    <div>
      <header>
        <h1>Hatch My Dragon</h1>
        <Navbar />
      </header>
    </div>
  )
}

// not sure if I need this?
export function PageName() {
  return (
    <div>
      <h2>Create goal!</h2>
      <p>instructions</p>
    </div>
  )
}

export function Footer() {
  return (
    <div>
      <footer>
        <p>Footer Text</p>
      </footer>
      <script src="script.js"></script>
    </div>
  )
}

// This is on New goal page
export function NewGoal() {
  return (
    <div>
      <h2>Create goal!</h2>
      <p>instructions</p>
      <section class="section-class">
          <div class="goal-block">
            <form>
              <div class="input-style">
                <label for="goal">Add New Goal</label>
                <input type="text" id="goal" class="textfield"></input>
              </div>
              <div class="input-style">
                <input type="submit" class="submit-button"></input>
              </div>
            </form>
          </div>
        </section>
    </div>
  )
}

export function AddToGoal() {
  return (
    <div>
      <section class="section-class">
        <div class="goal-block">
          <p class="tracking-goal">Running</p>
          <button class="tracking-button">I did it?</button>
    
          {/* <!-- <img src="dragonegg.jpg"> --> */}
          <p>Dragon Egg Image Placeholder</p>
        </div>
      </section>
    </div>
  )
}

export function AchievedGoal() {
  return (
    <div>
      <section class="section-class">
        <div class="goal-block">
          <h3>woo</h3>
          {/* <!-- <img src="dragonegg.jpg"> --> */}
          <p>Dragon  Image Placeholder</p>
        </div>
      </section>
    </div>
  )
}

export function UpdateGoal(){
  return (
    <div>
      <section class="section-class">
        <div class="goal-block">
          <form>
            <div class="input-style">
              <label for="goal">Update Goal Name</label>
              <input type="text" id="goal" class="textfield"></input> 
            </div>
            <div class="input-style">
              <input type="submit" class="submit-button"></input>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export function ManageGoals(){
  return (
    <div>
      <section>
        <div class="goal-block">
          <p class="tracking-goal">Running</p>
          <div class="button-spacing">
            <button class="manage-button">Go to Goal</button>
          </div>
          <div class="button-spacing">
            <button class="manage-button">Edit</button>
          </div>
          <div class="button-spacing">
            <button class="manage-button">Delete</button>
          </div>       
        </div>
      </section>
    </div>
  )
}

export function GoToCreateGoalPage(){
  return (
    <div>
      <section class="section-class">
        <div class="goal-block">
          <button class="manage-button">Go to Create Goals Page</button>
        </div>
      </section>
    </div>
  )
}

export function GoToRegistrationPage() {
  return (
    <div>
       <section>
        <div>
          <button class="register-button">Go to Registration Page</button>
        </div>
      </section>

    </div>
  )
}
export function LoginForm(){
  return (
    <div>
      <section>
        <form class="login-form">
          <div class="input-style">
            <label for="login">Username</label>
            <input 
              id="login" 
              type="text" 
              name="textfield"
              class="textfield">
            </input>
          </div>
          <div class="input-style">
            <label for="password>">Password</label>
            <input 
              id="password"
              type="text" 
              name="textfield" 
              class="textfield">
            </input>
          </div>
          <input 
            type="submit" 
            value="Submit" 
            class="submit-button">
          </input>
        </form>
      </section>
      <GoToRegistrationPage />
    </div>
  )
}

export function GoToLoginPage(){
  return (
    <div>
      <section>
        <div>
          <button class="login-button">Go to Login Page</button>
        </div>
      </section>
    </div>
  )

}
export function SignupPage(){
  return (
    <div>
      <section>
        <form class="signup-form">
          <div class="input-style">
            <label for="username">Add Username</label>
            <input id="username" 
              type="text" 
              name="textfield" 
              class="textfield">
            </input>
          </div>
          <div class="input-style">
            <label for="password>">Add Password</label>
            <input
              id="password"
              type="text" 
              name="textfield" 
              class="textfield">
            </input>
          </div>
          <div class="input-style">
            <label for="password>">Confirm Password</label>
            <input 
              id="password" 
              type="text" 
              name="textfield" 
              class="textfield">
            </input>
          </div>
          <input 
            type="submit" 
            value="Submit" 
            class="submit-button">
          </input>
        </form>
      </section>
      <GoToLoginPage />

    </div>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <main aria-live="polite">
        {/* Remove page number later */}
        <p class="nav-bar">Page1: Create Goal</p>
        <Header />
        
        <NewGoal />

        {/* Remove page number later */}
        <p class="nav-bar">Page2: Add To Goal</p>
        <Header />

        <h2>Track your goal!</h2>
        <p>instructions</p>
        <AddToGoal />

        {/* Remove page number later */}
        <p class="nav-bar">Page3: Achieved Goal</p>
        <Header />
        <h2>You hatched your Dragon!</h2>
        <p>Congratulatory text</p>
        <AchievedGoal />

        {/* Remove page number later */}
        <p class="nav-bar">Page4: Update Goal</p>
        
        <Header />
        <h2>Update your goal!</h2>
        <p>instructions</p>
        <UpdateGoal />

        {/* Remove page number later */}
        <p class="nav-bar">Page5: Goals Manager</p>
        <Header />
        <h2>Goals Manager</h2>
        <ManageGoals />
        <ManageGoals />
        <ManageGoals />

        {/* Remove page number later */}
        <p class="nav-bar">Page6: Goal Required on Goals Manager</p>
        <Header />
        <h2>Goals Manager</h2>
        <p>Oh no!  You need to create a goal first!</p>
        <GoToCreateGoalPage />

        {/* Remove page number later. also hide Navbar*/}
        <p class="nav-bar">Page1a: Landing Page and Login</p>
        <Header />
        <section>
          Section 1 Landing Page: welcome text
        </section>

        <section>
          Section 2 Landing Page: more text
        </section>
        <LoginForm />

        {/* Remove page number later. also hide Navbar*/}
        <p class="nav-bar">Page2a: Signup Page</p>
        <Header />
        <section>
          Section 1 Landing Page: welcome text
        </section>
        <SignupPage />








      </main>
      <Footer />

    </div>
    
    
    
  );

}