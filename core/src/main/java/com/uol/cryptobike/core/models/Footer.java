/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models;

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Footer} Sling Model used for the {@code cryptobike/components/footer} component.
 * 
 */
@ConsumerType
public interface Footer
    extends ComponentExporter
{


    String getLinkedin();

    String getFacebook();

    String getTwitter();

    String getYoutube();

    String getInstagram();

    String getHome();

    String getBottomtextleft();

    String getBottomtextright();

    String getBottomrightlink();

    List<FooterLinks> getFooterlinks();

}
