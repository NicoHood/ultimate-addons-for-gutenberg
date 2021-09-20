<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/lottie']['attributes'];

$attr          = array_merge( $defaults, (array) $attr );
$base_selector = 'uagb-block-';
$selector      = $base_selector . $id;

ob_start();
?>
jQuery( document ).ready(function() {
	UAGBLottie._run( <?php echo wp_json_encode( $attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>