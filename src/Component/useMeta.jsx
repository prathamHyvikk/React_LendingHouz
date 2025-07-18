import { useEffect } from 'react';

const useMeta = (title, description) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        const existingMeta = document.querySelector('meta[name="description"]');
        if (existingMeta) {
            existingMeta.setAttribute('content', description || '');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description || '';
            document.head.appendChild(meta);
        }
    }, [title, description]);
};

export default useMeta;
