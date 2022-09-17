import TOCInline from '@/components/TOCInline'
import { useEffect, useState } from 'react'

const PostLayout = ({ toc, children }) => {
    const [offsetY, setOffsetY] = useState(0)
    const [sections, setSections] = useState([])
    const marginTop = 100

    useEffect(() => {
        window.scrollTo(0, 0)
        setOffsetY(0)
    }, [])

    // $(function() {

    //   var link = $('#navbar a.dot');

    //   // Run the scrNav when scroll
    //   $(window).on('scroll', function(){
    //     scrNav();
    //   });

    //   // scrNav function
    //   // Change active dot according to the active section in the window
    //   function scrNav() {
    //     var sTop = $(window).scrollTop();
    //     $('section').each(function() {
    //       var id = $(this).attr('id'),
    //           offset = $(this).offset().top-1,
    //           height = $(this).height();
    //       if(sTop >= offset && sTop < offset + height) {
    //         link.removeClass('active');
    //         $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
    //       }
    //     });
    //   }
    //   scrNav();
    // });

    // const handleScroll = () =>{
    //   const els = Array.from(document.querySelectorAll('a.notion-table-of-contents-item'))
    //   const sTop = window.scrollTop()

    // }

    useEffect(() => {
        const els = Array.from(document.querySelectorAll('a.notion-table-of-contents-item'))
        const allSections = els.map((el, index) => {
            const { top: boundingTop } = el.getBoundingClientRect()
            return {
                topic: el.getAttribute('href'),
                boundingTop,
                isActive: index === 0,
            }
        })
        setSections(allSections)
    }, [])

    useEffect(() => {
        if (sections.length <= 1) return
        const onScroll = () => {
            setOffsetY(window.pageYOffset)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [sections])

    useEffect(() => {
        if (sections.length === 0) return
        if (sections.length === 1) {
            sections[0].isActive = true
            return
        }

        sections.forEach((section, index) => {
            if (index === 0) {
                section.isActive = sections[index + 1].boundingTop > offsetY + marginTop
            } else {
                if (sections[index + 1]) {
                    section.isActive =
                        sections[index + 1].boundingTop > offsetY + marginTop &&
                        sections[index].boundingTop <= offsetY + marginTop
                } else {
                    section.isActive = sections[index].boundingTop <= offsetY + marginTop
                }
            }
        })
    }, [sections, offsetY])

    return (
        <>
            <article className="prose notion-page-content-inner dark:prose-dark">
                {children}
            </article>
            <aside className="notion-aside">
                <div className="notion-aside-table-of-contents">
                    <div className="notion-aside-table-of-contents-header">Table of Contents</div>
                    <nav className="notions-table-of-contents">
                        <TOCInline toc={toc} />
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default PostLayout
