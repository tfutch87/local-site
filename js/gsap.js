gsap.registerPlugin(ScrollTrigger)

gsap.from("#moon", {duration: 3, x: 100, y: 100, scale: 2, skewX: 45, rotation: 180});



window.addEventListener('scroll', function(){
const checkpoint2 = 900;
let img = document.getElementById('photo');
var value = window.scrollY;
	
		if (value <= checkpoint2) {
			
   gsap.to("#about > img", {duration: 3,
						 
	scrollTrigger:{
	trigger:"#about",
	toggleAction: "restart none none none"},
	 opacity: 1 - value / checkpoint2,
	 scale: 2
						  
});
			
  } 
})




const sections = gsap.utils.toArray('.sections');

sections.forEach((section,i)=>{
  
  const modules = gsap.utils.toArray('.module',section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container > .row",
      start: "top center",
      end: "+=100%",
      scrub: 1,
      pin: true
    }
  });
  
  modules.forEach((module,i)=>{
    
    const figures = gsap.utils.toArray('.fig',module);
    tl.to(figures, {
      yPercent: -10,
      autoAlpha: 0,
      ease: "none",
      duration: 0.5,
      stagger: 0.5,
	
    });
    
    // fade in the panels element
    tl.to(gsap.utils.toArray('.panels', module), {autoAlpha: 1}, "<")
    
    const panels = gsap.utils.toArray('.panel', module);
    
    // just for visualizing, randomize the background color of the panels.
    gsap.set(panels, {backgroundColor: "rgb(random(0,255), random(0,255), random(0,255))"});
    
    panels.forEach((panel,i)=>{
      // first panel should start already in place, and last panel should end in the center. 
      tl.fromTo(panel, { 
        yPercent: i ? 100 : 0
      },{
        yPercent: i === panels.length - 1 ? 0 : -100,
        duration: i === 0 || i === panels.length - 1 ? 0.5 : 1,
        ease: "none",
      }, "-=0.5");
    });
    tl.to({}, {duration: 1}); // add some extra space at the end so the last panel sits for a bit before unpinning.

  });
});