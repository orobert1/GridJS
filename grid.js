let $ = require('jquery');

function Grid( cols, rows, gutterX, gutterY ){
  this.width =  $('body').width();
  this.height =  $('body').height();
  this.gridX = cols;
  this.gridY = rows;
  this.gutterX = gutterX;
  this.gutterY = gutterY;
  this.squareWidth =
  ( this.width - ((this.gridX - 2) * this.gutterX ) )
  / this.gridX
  this.squareHeight =
  ( this.height - ((this.gridY - 2) * this.gutterY ) )
  / this.gridY
}

Grid.prototype.marginLeft = function( HTMLElement, left ){
  let element = HTMLElement;
  if( left >= 1 ){
    element.style.marginLeft = left * this.squareWidth + ( ( left - 1 ) * this.gutterX ) + 'px';
  }else{
    element.style.marginLeft = "0px";
  }

}
Grid.prototype.marginRight = function( HTMLElement, right ){
  let element = HTMLElement;
  if( right >= 1 ){
    element.style.right = right * this.squareWidth + ( ( right ) * this.gutterX ) + 'px';
  }else{
    element.style.marginLeft = "0px";
  }

}


Grid.prototype.marginTop = function( HTMLElement, top ){
  let element = HTMLElement;
  if( top >= 1 ){
    element.style.marginTop = top * this.squareHeight + ( ( top - 1 ) * this.gutterY ) + "px";
  }else{
    element.style.marginTop = "0px";
  }

}


Grid.prototype.width = function( HTMLElement, width ){
  let element = HTMLElement;
  element.style.width = width * this.squareWidth + ( (width - 1) * this.gutterX)  + "px";
}

Grid.prototype.height = function( HTMLElement, height ){
  let element = HTMLElement;
  element.style.height = height * this.squareHeight + ( (height - 1) * this.gutterY)  + "px";

}



module.exports = Grid;
