module.exports.run = (client, message, args) => {
			const answers= [
				"https://giphy.com/gifs/XDLJpjzyw76Sc",
				"https://giphy.com/gifs/cartoon-explosion-nn2xFuRUFqXNS",
				"https://media.giphy.com/media/Qw4X3FkHjXDWr9p3bIk/giphy.gif",
				"https://media3.giphy.com/media/3o85xoHuw9GowpnyUg/giphy.gif",
				"https://i.gifer.com/298c.gif",
				"https://thumbs.gfycat.com/LoathsomeReliableChicken-size_restricted.gif",
				"https://media0.giphy.com/media/l3vR1tookIhM8nZJu/giphy.gif",
				"http://2.bp.blogspot.com/-xCrGhX8sJRQ/VAJPyz0ct3I/AAAAAAAAD7I/rWfaP-o7SUQ/s1600/time%2Bbomb.gif",
				"https://cdn.dribbble.com/users/149082/screenshots/1041104/bomb-explosion.gif",
				"https://mir-s3-cdn-cf.behance.net/project_modules/disp/21f78d23126231.5604767a04f53.gif",
				"https://thumbs.gfycat.com/CheapSeriousAfricanbushviper-max-1mb.gif",
				"https://i.gifer.com/9pHv.gif",
				"https://media.giphy.com/media/l0IxYWDltdHEqujnO/giphy.gif",
				"http://www.zombietime.com/mohammed_image_archive/derivative_works/tb.gif",
				"https://media3.giphy.com/media/3oEjHKPPlmQlGXfeLK/giphy.gif",
				"https://i.gifer.com/DzW.gif",
				"https://media.giphy.com/media/QAHeA9pX29lLi/giphy.gif",
				"https://media.giphy.com/media/IlNHcvyO6JCYE/giphy.gif",
				"https://uploads.disquscdn.com/images/230b7c1cf5db1cc3a67729fd545ecec4be5401245f172e3c6a0eefdd67e2bd22.gif",
				
				]
		  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(randomAnswer);
				
	}
   exports.conf = {
  aliases: ['Bomb','bomb']
  };
  exports.help = {
  name: "Bomb", description: "BOOM!"
  }
