interface LinksProps {
    url: string;
    imageUrl: string;
}

export const LinkAvatar = ({url, imageUrl}: LinksProps):JSX.Element => {
    return (
        <div>
            <a href={url} target="blank">
                <img
                    alt={"alt"}
                    src={imageUrl}
                    className="h-8 w-8 object-contain object-center"
                />
            </a>
        </div>
    )
}