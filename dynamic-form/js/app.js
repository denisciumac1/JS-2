var content = document.querySelector('#content')

var register_form = new Form ("Create account")

register_form.addField(new TextInput("Your name"))
register_form.addField(new TextArea("Some text....."))
register_form.addField(new CheckboxInput("I agree with terms"))
register_form.addField(new Button("Create"))

content.appendChild(register_form.render())
