<?php
/**
 * Template part for displaying a loading overlay.
 *
 * @package YourThemeName
 */

$lTitleText = get_bloginfo('name');
$lTitleLetters = str_split($lTitleText);
?>


<div class="loading-overlay" id="loading-overlay">
    <div class="l-generasl-col">
        <div class="l-title-wrapper">
            <div class="l-title">
                <?php foreach ($lTitleLetters as $letter) {
                    echo '<span class="l-letter">' . $letter . '</span>';
                } ?>
            </div>
        </div>
        <div class="disc-bars-wrapper">
            <div class="spinner">
                <img src="<?php echo get_template_directory_uri(); ?>/images/discoLP-87x87.png" alt="Loading Spinning Vinil Record...">
            </div> <!-- Replace with your actual spinner HTML/CSS -->
            <div class="sound-bars">
                <?php for ($i = 1; $i <= 28; $i++) {
                    echo '<div class="sound-bar"></div>';
                } ?>

            </div>
        </div>
    </div>
</div>

<style>

    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
        font-size: 2em;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    .l-generasl-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .l-title-wrapper {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .l-title {
        font-family: 'Quattrocento', serif;
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .l-letter {
        color: white;
        font-weight: bold;
        font-size: 3em;
        opacity: 0;
        transition: all 0.1s ease-in-out;
    }

    .l-letter:nth-child(7) {
        margin: 0 0.5em 0 0;
    }

    .disc-bars-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .sound-bars {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
    }

    .sound-bar {
        width: 3px;
        height: 3px;
        background: #00ff00;
        margin-right: 4px;
        transition: height cubic-bezier(.8,-0.25,.35,2.12);
        transition-duration: 0.07s;
        border-radius: 2px;
    }

</style>
