## Code Review Exercise

Write your code review here in markdown format.

There is an issue with the submit button and the reset button. Using these buttons are not actulaly doing antyhing with the form. I tried to add a name to it but upon further review, the button row group isn't in the form so its not correlated at all according to the code. To fix this just Put the div/button row inside the form.

intial Code:
<textarea
          class="form-textarea form-element-container"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>

</form>
<div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
<input class="form-button" type="submit" value="submit" />
<input class="form-button" type="reset" value="reset" />
</div>

updated code:

</textarea>
        <div
          class="form space-evenly-distributed-row-container form-buttons-container"
        >
          <input class="form-button" type="submit" value="submit" />
          <input class="form-button" type="reset" value="reset" />
        </div>
      </form>
    </div>

There was something that could be done about the checkboxes for the breeds. It wasn't in a fieldset it was just in a div. And the fieldset also needs to have a legend not just a p.

Intial code:

 <div class="form-fieldset form-element-container">
          <p class="form-label">
            What breeds would you like to learn?
          </p>
          <div>

Updated code:

<fieldset class="form-fieldset form-element-container">
<legend class="form-label">
What breeds would you like to learn?
</legend>
<div>

This class is a button and displays more info upon pressing it. But it is an anchor in the code and it should be a button. It works the same i b8uut the anchor should also have a reference to link. Either way a button is way more appropriate for this more info button.

Initial code:

</div>
          <a class="more-info-button">More Info</a>
</div>

updated code:

 </div>
          <button class="more-info-button">More Info</button>
 </div>
