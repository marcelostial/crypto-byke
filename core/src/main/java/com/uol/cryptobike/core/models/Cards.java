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
 * Defines the {@code Cards} Sling Model used for the multifield in {@code cryptobike/components/pedalar} component.
 * 
 */
@ConsumerType
public interface Cards
    extends ComponentExporter
{


    Image getIcon();

    String getTitle();

    String getDescription();

}
