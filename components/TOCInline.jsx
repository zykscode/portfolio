/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */

const TOCInline = ({
    toc,
    indentDepth = 3,
    fromHeading = 1,
    toHeading = 6,
    asDisclosure = false,
    exclude = '',
}) => {
    const re = Array.isArray(exclude)
        ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
        : new RegExp('^(' + exclude + ')$', 'i')

    const filteredToc = toc.filter(
        (heading) =>
            heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    )

    const marginTop = (heading) => {
        if (heading == 1) {
            return '0'
        } else if (heading == 2) {
            return '16px'
        } else if (heading == 3) {
            return '24px'
        } else {
            return '32px'
        }
    }

    const tocList = (
        <>
            {filteredToc.map((heading) => (
                <a
                    key={heading.value}
                    href={heading.url}
                    className={`notion-table-of-contents-item notion-table-of-contents-item-indent-level-${
                        heading.depth - 1
                    }`}
                >
                    <span
                        className="notion-table-of-contents-item-body"
                        style={{
                            display: 'inline-block',
                            marginLeft: `${marginTop(heading.depth)}`,
                        }}
                    >
                        {heading.value}
                    </span>
                </a>
            ))}{' '}
        </>
    )

    return (
        <>
            {asDisclosure ? (
                <details open>
                    <summary className="ml-6 pt-2 pb-2 text-xl font-bold">
                        Table of Contents
                    </summary>
                    <div className="ml-6">{tocList}</div>
                </details>
            ) : (
                tocList
            )}
        </>
    )
}

export default TOCInline
