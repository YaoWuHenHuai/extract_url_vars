Extract vars from url, and iterate on the return to set vars on div trhough ids, 

As long as the ids from url created and from new document match, this will work. 

Example:
//Extracted url>>
https://domain_apis.php?product_size=King%20size&product_origin=Mexico%20City

//New page which will use url vars
<div id="product_size">To replace</div>
<div id="product_origin">To replace</div>
