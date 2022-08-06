const email = document.querySelectorAll(".email");
const emailbtn = document.querySelectorAll(".submit");
const form = document.querySelector("form.grid");

emailbtn.forEach((btn, i) => {
	btn.onclick = (e) => {
		e.preventDefault();
		if (email[i].value === "") {
			email[i].nextElementSibling.className = "error";
			email[i].nextElementSibling.textContent = "Please Enter Your Email";
			email[i].classList.remove("success-border");
			email[i].classList.add("error-border");
		}
		// email Validation
		else if (!ValidateEmail(email[i].value)) {
			email[i].nextElementSibling.className = "error";
			email[i].nextElementSibling.textContent = "Please Check Your Email";
			email[i].classList.remove("success-border");
			email[i].classList.add("error-border");
		} else {
			email[i].nextElementSibling.className = "success";
			email[i].nextElementSibling.textContent = "☑";
			email[i].classList.remove("error-border");
			email[i].classList.add("success-border");
		}
	};
});

// ==============================
// validation function
// ==============================
function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

// ==============================
// GSAP
// ==============================
// timeline
/**
document.querySelector(".box").addEventListener("click", () => {
	const tl = gsap.timeline({ repeat: 1, yoyo: true });
	tl.to(".box", {
		y: 200,
		opacity: 0.85,
		duration: 1,
		ease: "back.inOut(1.5)",
	})
		.to(".box", {
			duration: 0.5,
			rotate: 270,
			ease: "steps(8)",
		})
		.to(".box", {
			duration: 0.5,
			scale: 4,
			ease: "slow(0.5, 0.7, false)",
		})
		.to(
			".box",
			{
				duration: 1,
				backgroundColor: "red",
				ease: "slow(0.5, 0.7, false)",
			},
			"end"
		);
});
 */
// text animation
/**
gsap.registerPlugin(TextPlugin);
gsap.to("h2", {
	duration: 4.5,
	repeat: 2,
	yoyo: true,
	text: "this is text from gsap javascript",
});
 */
// text lines fadeIn
/**
gsap.from(".line", {
	duration: 4.5,
	stagger: 1.4,
	opacity: 0,
	y: 50,
	delay: 1,
});
*/
