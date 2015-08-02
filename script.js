var DomControl =
{
    strResult:' strResult text ',
    printResult:function()
    {
        alert( this.strResult );
    },
    changeById( id,val )
    {
        document.getElementById( id ).innerHTML=val;
    },
    /*
    code description
    */
    changeByTagName( tagName,val )
    {
        var elements = document.getElementsByTagName( tagName );
        var i = 0;
        while(i < elements.length )
        {
            elements[i].innerHTML = val;
            i++;
        }
    }
}

DomControl.changeByTagName( 'p', 'p new value' );