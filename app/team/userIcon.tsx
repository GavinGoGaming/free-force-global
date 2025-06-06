export default function UserIcon({width, height}: {width: string, height: string}) {
    return (
        <div className="user-icon" style={{width: width, height: height, background: '#EADDFF',
            borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg width="100%" height="100%" viewBox="0 0 72 65" fill="none" xmlns="http://www.w3.org/2000/svg"
                 style={{width: '70%', height: '70%'}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M51.0006 15C51.0006 23.2843 44.2849 30 36.0006 30C27.7163 30 21.0006 23.2843 21.0006 15C21.0006 6.71573 27.7163 0 36.0006 0C44.2849 0 51.0006 6.71573 51.0006 15ZM46.0006 15C46.0006 20.5229 41.5235 25 36.0006 25C30.4778 25 26.0006 20.5229 26.0006 15C26.0006 9.47715 30.4778 5 36.0006 5C41.5235 5 46.0006 9.47715 46.0006 15Z" fill="#4F378A"/>
                <path d="M36.0006 37.5C19.8147 37.5 6.0238 47.071 0.770508 60.4801C2.05025 61.7509 3.39835 62.9529 4.80883 64.0801C8.72068 51.7692 20.9924 42.5 36.0006 42.5C51.0088 42.5 63.2806 51.7693 67.1924 64.0802C68.6029 62.9529 69.951 61.7509 71.2307 60.4802C65.9775 47.071 52.1866 37.5 36.0006 37.5Z" fill="#4F378A"/>
            </svg>
        </div>
    );
}