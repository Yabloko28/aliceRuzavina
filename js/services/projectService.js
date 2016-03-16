app.service('ProjectService', ProjectService);

function ProjectService() {
	this.projects = PROJECTS_DATA;
}

ProjectService.prototype.getProjects = function() {
	return this.projects;

};

ProjectService.prototype.getProject = function(id) {
	return this.projects.filter(function(project) {return project.ID === id}) [0];
}

var PROJECTS_DATA = [{
	"ID": "tailoring",
	"Title": "Tailoring",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "sustainability",
	"Title": "Sustainability Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "creatures",
	"Title": "Creatures",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "accessory",
	"Title": "Accessory Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "shirt",
	"Title": "Shirt Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "white",
	"Title": "White Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "floge",
	"Title": "Flöge Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}, {
	"ID": "circus",
	"Title": "Circus Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }],
	"Sketchbook": [{
    "src": 'images/album_cover_riso.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/pendant_hand.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/expbody2.jpg',
    "title": 'Pic 3'
  }]
}]