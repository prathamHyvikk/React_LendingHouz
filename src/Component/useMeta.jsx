// import { useEffect } from 'react';

// const useMeta = (title, description) => {
//     useEffect(() => {
//         if (title) {
//             document.title = title;
//         }

//         const existingMeta = document.querySelector('meta[name="description"]');
//         if (existingMeta) {
//             existingMeta.setAttribute('content', description || '');
//         } else {
//             const meta = document.createElement('meta');
//             meta.name = 'description';
//             meta.content = description || '';
//             document.head.appendChild(meta);
//         }
//     }, [title, description]);
// };

// export default useMeta;


import { useEffect } from 'react';

const useMeta = (title, description, googleVerification = null) => {
    useEffect(() => {
       
        if (title) {
            document.title = title;
        }
 
        const existingDescription = document.querySelector('meta[name="description"]');
        if (existingDescription) {
            existingDescription.setAttribute('content', description || '');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description || '';
            document.head.appendChild(meta);
        }
 
        if (googleVerification) {
            let googleMeta = document.querySelector('meta[name="google-site-verification"]');
            if (!googleMeta) {
                googleMeta = document.createElement('meta');
                googleMeta.name = 'google-site-verification';
                googleMeta.content = googleVerification;
                document.head.appendChild(googleMeta);
            } else {
                googleMeta.setAttribute('content', googleVerification);
            }
        }
    }, [title, description, googleVerification]);
};

export default useMeta;
