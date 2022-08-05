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

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.wcm.core.components.models.Image;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Tourdeterre} Sling Model used for the {@code cryptobike/components/tourdeterre} component.
 * 
 */
@ConsumerType
public interface Tourdeterre
    extends ComponentExporter
{


    String getTitle();

    String getText();

    Image getImage();

}
