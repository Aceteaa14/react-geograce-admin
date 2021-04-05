import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        


        <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="assets/vendor/linearicons/style.css" />
	<link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="stylesheet" href="assets/css/demo.css" />
	<link rel="stylesheet" href="assets/css/style.css" />
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/glogo.png" />
  <script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
  <script src="js/custom.js"></script>
	
        </Head>
        <body>
          <Main />
          <NextScript />
  <script src="assets/vendor/jquery/jquery.min.js"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
	<script src="assets/vendor/chartist/js/chartist.min.js"></script>
	<script src="assets/scripts/klorofil-common.js"></script>
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/custom.js"></script>
	<link rel="stylesheet" href="assets/vendor/linearicons/style.css" />

        </body>
      </Html>
    )
  }
}

export default MyDocument