import React from 'react'
const myStyle = {
    height : '70px',
    width : '7S0px'

}

function ContentFile() {
  return (
    <div className='container'>
        <div class="row">
            <div class="col-md-4 text-center">
                <i aria-hidden="true" class="fa fa-compress fa-5x">
                    </i> 
                    <h2>Shorten Links</h2> 
                    <p>T.LY URL Shortener makes long links look cleaner and easier to share! Add your own
Custom Domains
to personalize your brand!</p>
</div> 
<div class="col-md-4 text-center">
    <i aria-hidden="true" class="fa fa-line-chart fa-5x">
        </i> <h2>Track Clicks</h2> 
        <p>
            With over 15,896,845 links shortened and tracked over 258,752,854
            clicks,
            T.LY lets you know
            where users are coming from. Just add a <strong>+</strong> at the end of any short url to see stats.
</p>
</div> 
<div class="col-md-4 text-center">
    <i style={myStyle} aria-hidden="true" class="fa fa-chrome"></i> 
    <h2>Browser Extension</h2>
     <p>
        Install our free
    <a href="/extension">Browser Extension</a> with over 450,000 users from the extension store to automatically shorten links in one easy click! We support Chrome, Firefox, Edge
    and
    Opera.
</p>
</div>
</div>
</div>
  )
}

export default ContentFile