$(document).ready(onReady);

function onReady() {
    console.log('So ready!');

    getQuotes()
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
            console.log('GET /quotes responce', response)

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