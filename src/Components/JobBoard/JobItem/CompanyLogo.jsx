export default function CompanyLogo({ logoUrl, alt }) {
	return <img src={logoUrl} alt={alt} title={alt} />;
}
