let page = 0;
let max_page = 0;
let post_per_page = 5;

function get_max_page()
{
    ;
}

function page_up()
{
    ++page;
    if (max_page <= page) page = max_page; 
    return;
}

function page_down()
{
    --page;
    if (page < 0) page = 0; 
    return;
}

function change_post_per_page(new_value)
{
    if (Number.isInteger(new_value)) post_per_page = new_value;
    return;
}