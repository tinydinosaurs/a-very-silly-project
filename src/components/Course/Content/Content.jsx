import React from 'react';

const Content = ({ parts }) => {
    return (
        <section>
            {parts.map((part, i) => {
                return (
                    <p key={`${part}-${part.id}`}>
                        {`${part.name}:  ${part.exercises}`}
                    </p>
                );
            })}
        </section>
    );
};

export default Content;
