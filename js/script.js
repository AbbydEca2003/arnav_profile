function contact(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('contact_me').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
}

function about(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('about_me').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
}

function project(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('project').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
}

function back(){
    document.getElementById('project').style.display = 'none';
    document.getElementById('about_me').style.display = 'none';
    document.getElementById('contact_me').style.display = 'none';
    document.getElementById('foot').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}

function mail(){
    document.getElementById('mail').style.display = 'block';
    document.getElementById('mail_btn').style.display = 'none';
}

function sendEmail() {
    const email = "arnavshrestha44@gmail.com";
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}