import React, {onClick} from "react";


function Section (props) {
    return (

<section class="section is-medium">
  <h1 class="title">Join the Waitlist</h1>
  <h2 class="subtitle">
    Become one of the first to experience EasyStream and save money big time.
  </h2>
  <a class="" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    <button class="button is-primary is-light is-large">Join Now</button>
  </a>
  <div class="container">
      <div class="has-text-white">
         hello world 
      </div>
  </div>
  <div class="container">
  <div class="">
  <div class="control has-icons-left has-icons-right">
  <input class="input" type="email" placeholder="Email"/>
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
  </div>
</div>
</section>

    )
}

export default Section;