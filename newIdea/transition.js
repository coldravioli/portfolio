document.addEventListener("DOMContentLoaded",()=>{


    /* =========================
       FISH HOVER
    ========================= */
    
    
    const links =
    document.querySelectorAll(".landing-menu a");
    
    
    const fish =
    document.querySelectorAll(".fish");
    
    
    
    links.forEach(link=>{
    
    
        link.addEventListener("mouseenter",()=>{
    
    
            fish.forEach(item=>{
    
                item.style.opacity="0";
    
            });
    
    
    
            const target =
            document.querySelector(
            "." + link.dataset.fish
            );
    
    
            if(target){
    
                target.style.opacity="1";
    
            }
    
    
        });
    
    
    
        link.addEventListener("mouseleave",()=>{
    
    
            fish.forEach(item=>{
    
                item.style.opacity="0";
    
            });
    
    
        });
    
    
    
    });
    
    
    
    
    /* =========================
       PAGE DISSOLVE
    ========================= */
    
    
    const pages =
    document.querySelectorAll("a");
    
    
    
    pages.forEach(page=>{
    
    
    page.addEventListener("click",(e)=>{
    
    
        e.preventDefault();
    
    
        const destination =
        page.href;
    
    
    
        document.body.classList.add("fade");
    
    
    
        setTimeout(()=>{
    
    
            window.location.href =
            destination;
    
    
        },800);
    
    
    
    });
    
    
    });
    
    
    });