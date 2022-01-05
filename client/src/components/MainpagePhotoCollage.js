import { Box, ImageList, ImageListItem } from "@mui/material";
import styles from '../../styles/Galeria.module.css';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1562103608-104fa5589661',
        title: 'pizza con arrgula',
    },
    {
        img: 'https://images.unsplash.com/photo-1597289124948-688c1a35cb48',
        title: 'lasaña'
    },
    {
        img: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7',
        title: 'pizza con aceitunas y salami'

    },
    {
        img: 'https://images.unsplash.com/photo-1589187151053-5ec8818e661b',
        title: 'pizza con albahaca'
    },
    {
        img: 'https://images.unsplash.com/photo-1571066811602-716837d681de',
        title: 'pizza con huevo, tomate seca, y aceitunas'
    },
    {
        img: 'https://images.unsplash.com/photo-1550401728-539ebf40d9e9',
        title: 'chef preprando la masa para la pizza'
    },
    {
        img: 'https://images.unsplash.com/photo-1621538997326-08eb4e59886c',
        title: 'pizza en el horno'
    },
    {
        img: 'https://images.unsplash.com/photo-1537734796389-e1fc293cf856',
        title: 'la masa para la pizza'
    },
]

const MainpagePhotoCollage = () => {

    return <Box sx={{ width: 1000, height: 500, overflowY: "auto" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </Box>
};

export default MainpagePhotoCollage;