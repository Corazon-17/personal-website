import { H1, H2, H3, H4, H5, H6 } from "./Heading";
import { Code, Pre } from "./Code";
import { Link } from "./Link";
import MDXImage from "./Image"

const MDXComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    pre: Pre,
    code: Code,
    a: Link
};

export default MDXComponents