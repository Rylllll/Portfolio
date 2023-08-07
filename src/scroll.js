
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(".scrollrev, .latest", {
  origin: 'left',
})

sr.reveal(".scrollrevs", {
  origin: 'top',
  interval: 100,
})

sr.reveal(".scrollrevss", {
  origin: 'bottom',
  interval: 100,
})

sr.reveal(".rightsroll", {
  origin: 'right',
})