
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.navbar .nav-link').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
 const form=document.querySelector('#contactForm');
 if(form)form.addEventListener('submit',e=>{
  e.preventDefault();const d=new FormData(form);
  const subject=encodeURIComponent('Website enquiry - '+d.get('name'));
  const body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nWebsite: '+d.get('website')+'\nService: '+d.get('service')+'\n\n'+d.get('message'));
  location.href='mailto:abdulwaheedwork1122@gmail.com?subject='+subject+'&body='+body;
  document.querySelector('#formNote').textContent='Your email application should open with the enquiry ready to send.';
 });
});
