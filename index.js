'use strict';

function search(e) {
  e.preventDefault();
  const z = document.getElementById('zip').value;

  // Zip code error
  if (z.length < 5 || z.length > 5) {
    $('#error').empty().append('<p class="err">Please enter a valid Zip Code</p>');
  }

  const res = dealers.find(o => o.zip === z);
  
  if (res === undefined) {
    // No dealer found error
    $('#error').empty().append(`<p class="err">Could not find a dealer for ${z}</p>`);
  } else {
    const addy = `${res.address}, ${res.city}, ${res.state}`;
    const linkAddy = addy.replace(/ /g, '+');

    $('#error').empty();
    $('#info').empty().append(
      `<p>Your local Cadillac dealer is:</p>
      <h2>${res.name}</h2>
      <p>${res.address}</p>
      <p>${res.city}, ${res.state} ${res.zip}</p>
      <a href="http://${res.url}" target="_blank">Visit their website!</a>`
    );
    $('#map').empty().append(
      `<a href="https://www.google.com/maps/search/?api=1&query=${linkAddy}">
      <img src="https://maps.googleapis.com/maps/api/staticmap?center=${linkAddy}&zoom=13&size=300x300&maptype=roadmap&markers=${linkAddy}&key=AIzaSyCvH1drFfqflI4Sy10IeEmQnKe3yKQy5-o" alt="${res.name}">
      </a>`
    )
  }
}

const dealers = [
  {
    name: 'Armen Cadillac',
    address: '1441 E. Ridge Pike',
    city: 'Plymouth Meeting',
    state: 'PA',
    zip: '19462',
    url: 'www.armencadillac.com'
  },
  {
    name: 'Cadillac of Turnersville',
    address: '3400 Route 42 [Black Horse Pike]',
    city: 'Turnersville',
    state: 'NJ',
    zip: '08012',
    url: 'www.cadillacofturnersville.com'
  },
  {
    name: 'Coleman Cadillac',
    address: '300 Renaissance Blvd',
    city: 'Lawrenceville',
    state: 'NJ',
    zip: '08648',
    url: 'www.colemancadillacnj.com'
  },
  {
    name: 'Delaware Cadillac',
    address: '1606 Pennsylvania Ave',
    city: 'Wilmington',
    state: 'DE',
    zip: '19806',
    url: 'www.delawarecadillac.com'
  },
  {
    name: 'Faulkner Cadillac Trevose',
    address: '4447 Street Rd.',
    city: 'Trevose',
    state: 'PA',
    zip: '19053',
    url: 'www.faulknercadillactrevose.com'
  },
  {
    name: 'Faulkner Cadillac of Bethlehem',
    address: '298 Stoke Park Road',
    city: 'Bethlehem',
    state: 'PA',
    zip: '18017',
    url: 'www.cadillacoflehighvalley.com'
  },
  {
    name: 'Fred Beans Cadillac',
    address: '841 N Easton Road',
    city: 'Doylestown',
    state: 'PA',
    zip: '18902',
    url: 'www.fredbeanscadillac.com'
  },
  {
    name: 'Hill Cadillac',
    address: '3964 West Chester Pike',
    city: 'Newtown Square',
    state: 'PA',
    zip: '19073',
    url: 'www.hillcadillac.com'
  },
  {
    name: 'Holman Cadillac',
    address: '1200 Route 73 South',
    city: 'Mount Laurel',
    state: 'NJ',
    zip: '08054',
    url: 'www.holmancadillac.com'
  },
  {
    name: 'Kerbeck Cadillac',
    address: '340 N. Albanacy Ave',
    city: 'Atlantic City',
    state: 'NJ',
    zip: '08401',
    url: 'www.kerbeckcadillacac.com'
  },
  {
    name: 'Kutztown Cadillac',
    address: '14165 Kutztown Road',
    city: 'Fleetwood',
    state: 'PA',
    zip: '19522',
    url: 'www.kutztowncadillac.com'
  },
  {
    name: 'Ruggeri Cadillac',
    address: '1550 Wilmington Pike Route 202',
    city: 'West Chester',
    state: 'PA',
    zip: '19382',
    url: 'www.ruggericadillac.com'
  },
  {
    name: 'Scott Cadillac',
    address: '3333 Lehigh Street',
    city: 'Allentown',
    state: 'PA',
    zip: '18103',
    url: 'www.scottcadillac.net'
  },
  {
    name: 'Star Cadillac',
    address: '480 N. West End Blvd Route 309',
    city: 'Quakertown',
    state: 'PA',
    zip: '18951',
    url: 'www.starcadillac.com'
  },
  {
    name: 'Burke Cadillac',
    address: '227 Bayberry Drive',
    city: 'Cape May Court House',
    state: 'NJ',
    zip: '08210',
    url: 'www.burkecadillac.com'
  }
];