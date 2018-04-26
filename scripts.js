$(function() {
  // elemek összegyűjtése
  let $contentWrapper = $('#content-wrapper');
  let $templates = $('.content-template');

  // konstansok
  const itemCount = 51;
  const templateCount = $templates.length;

  // content wrapper feltöltése
  for (let index = 0; index < itemCount; index++) {
    
    // random template kiválasztása
    let templateIndex = Math.random();
    templateIndex = templateIndex * templateCount - 0.5;
    templateIndex = Math.round(templateIndex, 0);

    // kiválasztott elem betöltése
    let template = $templates[templateIndex];
    let templateContent = $(template).html();
    $contentWrapper.append(templateContent);
  }

  // masonry
  $contentWrapper.imagesLoaded(function() {
    $contentWrapper.masonry({
      itemSelector: '.content-item',
      gutter: 15
    });
  });
});
