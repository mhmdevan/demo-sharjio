import { FunctionComponent } from 'react';

interface FooterItemOptions {
    title: string;
    alt: string;
    iconSrc: string;
}

export const FooterItem: FunctionComponent<FooterItemOptions> = ({ title, alt, iconSrc }): JSX.Element => {
    return (
        <span>
            <img src={iconSrc} alt={alt}/>
            <br/>
            {title}
        </span>
    );
}