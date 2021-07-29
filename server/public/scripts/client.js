$(document).ready(onReady);

function onReady() {
    console.log('So ready!');

    getQuotes()
    console.log('submitBtn', $('submitBtn'));
    $('#submitBtn').on('click', addQuote);
}

function addQuote() {
    console.log('inside addQuote');

    // Grab our quote data from the DOM inputs
    let newQuote = {
        text: $('#quoteInput').val(),
        author: $('#authorInput').val()
    };
    console.log('NewQuote is', newQuote);
    // POST our quote to /quotes
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: newQuote,
    }).then((response) => {
        console.log('POST / quotes', response);
        // Refresh data from the server
        // by calling the GET /quotes endpoint
        // and re-rendering the DOM

        // Make sure to do this AFTER the POST request is complete
        // (in our.then())
       // getQuotes();
    }).catch(error => {
        console.log('POST /quotes failed', error);
        $('body').append(`
        <h2> 
            Failed to save quote! Check your data, before you wreck your data
        </h2>
        `);
    });
}

function getQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quotes',
    })
        //Network request take a LONG time
        //wait for the request to complete and THEN, run this function
        //Whatever we pass to res.send()
        //becomes the 'response argument
        .then((response) => {
            console.log('GET /quotes response', response)

          let quoteList =  $('#quotes');
          console.log('quotes list element', quoteList)

          for (let quote of response) {
              console.log('quote is', quote)
              quoteList.append(`
                <li>
                    ${quote.text}
                    <em> -- by ${quote.author}</em>
                </li>
              `);
          }
        }
)};